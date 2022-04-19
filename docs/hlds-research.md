# HLDS file format

This is some documentation + important points about the .hlds file format

If you want to add comments to your file you start it with "#"

## Header

Each file has a header that is wrapped between "="'s.
This is named als `Location` in the models files

The First line consists of a key and title which are splitted with a ": "
Following this are the following options that can optionally be set to give extra info about the restaurant
- osm (openstreetmap)
- address
- phone
- website

## Dish

A Basic dish follows this template (all spaces included):
```text
dish UNIQUE_ID: NAME OF DISH (-- AN OPTIONAL COMMENT) (OPTIONAL TAGS) (€ PRICE)
```

## Choice Menus

To define a choice menu we define it with a unique id we use to reference the options:
```
UNIQUE_ID: NAME OF MENU
    ID_FOR_OPTION_1: NAME FOR OPTION 1 \t(-- OPTIONAL COMMENT)\t(OPTIONAL TAGS) (€ EXTRA_PRICE)
```

The extra price is optional and will be added to the base price of the dish

To use menu at a dish you have the option to make the choices single or multiple options
```
---- DISH DEFINITION LINE---
    single_choice MENU_ID
    multi_choice MENU_ID
```

## Tags
Tags are optionally an not used (Could not find a use case for it in the code)
It follows a the following structure: `{has_INSERTTAGHERE}`. I do not know if it supports multiple "_"'s, Could not find a place where the tag existed out more of 2 words (including the has)

It always starts with the `dish` keyword at character position 0 on a line
