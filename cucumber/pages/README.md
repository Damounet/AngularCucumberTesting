# angularFunctionnalTesting

Testing the Tour of Heroes Tutorial app using protractor and cucumber.
[How to install and run the functionnal tests](../)|[How to write features files](../features)|[How to write steps files](../step_definitions)

# Pages files

Page files are helper to the QA to write their steps files.

This documentation has to help developpers to write the pages files.

These are basically a sum of getter to allow the QA to access the pages' elements.

## Base page

The base page is an interface. It is mandatory to implement it.

It contains getters used in all pages.

## Import



## Some templates

```Typescript
getElementById(elementId:string){
    return element(by.id(elementId));
}

getElementByCssSelector(){
    return element(by.css(.class));
}
```

## Naming convention

## Some guidelines
