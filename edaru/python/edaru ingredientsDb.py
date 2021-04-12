import re
import requests
import pymongo
import json
from datetime import datetime
import itertools
from bs4 import BeautifulSoup
import gzip
import urllib.parse

headers = {'charset': 'utf-8'}
conn = pymongo.MongoClient("192.168.1.66", 27017)
db = conn['home-planner']
receipts = db['receipts']
receip = db['receip']
ingredients = db['ingredients']
ingredi = db['ingredi']
measure = db['measure']
newSet = set([])
arr = []
for receipt in receipts.find():
    print (receipt.get('strMeal'))
    for i in range (24):
        elem = receipt.get('strMeasure' + str(i+1))
        if elem == '':
            break 
        newSet.add(elem)
for el in newSet:
    if el != None:
        arr.append(el)
arr.sort()
for ingred in arr:
    data = {'measure': ingred}
    measure.update(data)
