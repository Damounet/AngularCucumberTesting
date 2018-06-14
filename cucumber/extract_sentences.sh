#!/bin/bash
############################################################################
#                                                                          #
#              Extract and export all the steps used in every              #
#                    feature file of the test suite                        #
#                                                                          #
############################################################################

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
TMP_FILE='tmp.txt'
CSV_FILE='sentences_count.csv'
MD_FILE='SENTENCES.md'

echo "Base directory: $DIR"
cd "$DIR"

###############
## FUNCTIONS ##
###############

# $1: string to search
# $2: source file
# $3: result md file
# $4: result csv file
write_results() {
	if [ "$#" -ne 4 ]; then
		echo "Illegal number of parameters given to write_results: expected 4, got $#"
		exit 1
	fi
	local WORD_TO_SEARCH=$1
	local SOURCE_FILE=$2
	local MD_FILE=$3
	local CSV_FILE=$4
	echo "Looking for word: $WORD_TO_SEARCH"
	echo -e "\n## $WORD_TO_SEARCH\n" >> $MD_FILE
	cat ${SOURCE_FILE} | grep "$WORD_TO_SEARCH" | sort | uniq | while read -r line; do
		echo "* \`$line\`" >> $MD_FILE
		COUNT=$(grep "${line}"'[ \t]*$' ${SOURCE_FILE} | wc -l)
		echo "${line};${COUNT}" >> $CSV_FILE
	done
}

###############
### PROGRAM ###
###############

echo "MODE ${MODE}"
echo "Retrieving files data into a tmp file and replacing placeholders with dumb strings"
# retrieve files data into tmp file + replace strings with dumb strings
echo '' > ${TMP_FILE}
for file in `find features -iname '*.feature'`; do
	echo "File: $file"
  sed -e "s/'[a-zA-Z0-9_ \/-]*'/<placeholder>/g" < ${file} | sed -e "s/<[a-zA-Z0-9]*>/<placeholder>/g" >> ${TMP_FILE}
done

# Delete spaces and tabulations for each start of line
echo "Deleting spaces and tabulations for each start line"
sed -n -i -e 's/^[ \t]* //p' ${TMP_FILE}

# Retrieve line numbers of sentences beginning with "And" and transform them to the corresponding keyword
echo "Converting 'And' sentences"
grep -n "And" ${TMP_FILE} | cut -d : -f 1 | while read -r number; do
	PREVIOUS_LINE_NUMBER=$((${number} - 1))
	PREVIOUS_LINE_KEY_WORD=$(sed -n "${PREVIOUS_LINE_NUMBER}p" ${TMP_FILE} | awk '{print $1;}')
	sed -i -e "${number}s/And/${PREVIOUS_LINE_KEY_WORD}/" ${TMP_FILE}
done

if [ "$(grep "And" ${TMP_FILE} | wc -l)" -gt 0 ]; then
	echo "WARNING: 'And' remaining"
	echo "Something is fishy... ABORT!"
	exit 1
fi

# retrieve sentences and count them
echo "Sentence;Count" > $CSV_FILE
echo -e "# Sentences\n" > $MD_FILE
echo -e "Those are the sentences you can use within Cucumber's feature files\n" >> $MD_FILE

write_results "Given" ${TMP_FILE} $MD_FILE $CSV_FILE
write_results "When" ${TMP_FILE} $MD_FILE $CSV_FILE
write_results "Then" ${TMP_FILE} $MD_FILE $CSV_FILE

rm -f ${TMP_FILE}*
echo "File ${CSV_FILE} created."
echo "File ${MD_FILE} created."
echo "End of script"
exit 0
