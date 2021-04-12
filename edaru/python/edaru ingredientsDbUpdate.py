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
counter = 0
for ingred in ingredients.find():
    ingr = ingred.get('strIngredient')
    cat = ingred.get('strCategory')
    days = ingred.get('intStorePeriodDays')
    maxS = ingred.get('intStoreTempMax')
    minS = ingred.get('intStoreTempMin')

    # if ingred.get('strIngredient') != '': 
    if 'Шоколад' in ingr or 'шоколад' in ingr: 
        counter += 1
        newData = {'strIngredient': ingr, 'strCategory': 'Шоколад', 'intStorePeriodDays': days, 'intStoreTempMax': maxS, 'intStoreTempMin': minS }
        print (newData)
    else:
        continue 
    # ingredients.update(ingred, newData)
print (counter)
