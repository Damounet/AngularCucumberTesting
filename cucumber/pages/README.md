[How to write features files](../features) | [How to write steps files](../step_definitions)

# Pages files

In order to help the Quality Assurance (QA) to write the steps, we use helpers called pages files which allow technical abstraction.

They are located in /cucumber/pages folder. Their name is "pageNamePage.po.ts". They are a sum of getter to allow the QA to access the pages' elements.

This documentation has to help developpers to write the pages files.

## Base page

The base page is an interface. Each new page has to implement it.

It contains getters and attributes used in all pages.

## Import

All imports needed are the **BasePage** and **protractor** to work with _Element_.

Just copy and paste in your new page file the few lines below.

```Typescript
import { browser, by, element, until } from 'protractor';
import { BasePage } from './basePage.po';
```

## Some templates

```Typescript
getElementById(elementId:string){
    return element(by.id(elementId));
}

getElementByClass(){
    return element(by.className(".class"));
}

getElementByCssSelector(){
    return element(by.css(img[src="srcValue"]))
}
```

[Locators documentation.](https://github.com/angular/protractor/blob/master/docs/locators.md)

## Some guidelines

Create a page's exportable constant instance to allow a simple access to the pages methods.

```Typescript
export const genericPage = new GenericPage();
```
