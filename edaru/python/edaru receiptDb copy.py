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

for receipt in receipts.find():
	result = {'idMeal': receipt.get('idMeal'), 'strMeal': receipt.get('strMeal'), 'strDrinkAlternate': receipt.get('strDrinkAlternate'), 
		'strDescription': receipt.get('strDescription'), 'strCategory': receipt.get('strCategory'), 'strSubCategory': '', 'strArea': receipt.get('strArea'), 
		'strSource': receipt.get('strSource'), 'strForPersons': 0, 'strRequestsCounter': 0,
		'strInstructions':	receipt.get('strInstructions'), 'strMealThumb': receipt.get('strMealThumb'), 'strTags': receipt.get('strTags'),
		'strYoutube': receipt.get('strYoutube'), 'strIngredient1': receipt.get('strIngredient1'), 'strIngredient2': receipt.get('strIngredient2'),
		'strIngredient3': receipt.get('strIngredient3'), 'strIngredient4': receipt.get('strIngredient4'), 'strIngredient5': receipt.get('strIngredient5'),
		'strIngredient6': receipt.get('strIngredient6'), 'strIngredient7': receipt.get('strIngredient7'), 'strIngredient8': receipt.get('strIngredient8'),
		'strIngredient9': receipt.get('strIngredient9'), 'strIngredient10': receipt.get('strIngredient10'), 'strIngredient11': receipt.get('strIngredient11'),
		'strIngredient12': receipt.get('strIngredient12'), 'strIngredient13': receipt.get('strIngredient13'), 'strIngredient14': receipt.get('strIngredient14'), 
		'strIngredient15': receipt.get('strIngredient15'), 'strIngredient16': receipt.get('strIngredient16'), 'strIngredient17': receipt.get('strIngredient17'),
		'strIngredient18': receipt.get('strIngredient18'), 'strIngredient19': receipt.get('strIngredient19'), 'strIngredient20': receipt.get('strIngredient20'),
		'strMeasure1': receipt.get('strMeasure1'), 'strMeasure2': receipt.get('strMeasure2'), 'strMeasure3': receipt.get('strMeasure3'),
		'strMeasure4': receipt.get('strMeasure4'), 'strMeasure5': receipt.get('strMeasure5'), 'strMeasure6': receipt.get('strMeasure6'), 
		'strMeasure7': receipt.get('strMeasure7'), 'strMeasure8': receipt.get('strMeasure8'), 'strMeasure9': receipt.get('strMeasure9'),
		'strMeasure10': receipt.get('strMeasure10'), 'strMeasure11': receipt.get('strMeasure11'), 'strMeasure12': receipt.get('strMeasure12'),
		'strMeasure13': receipt.get('strMeasure13'), 'strMeasure14': receipt.get('strMeasure14'), 'strMeasure15': receipt.get('strMeasure15'),
		'strMeasure16': receipt.get('strMeasure16'), 'strMeasure17': receipt.get('strMeasure17'), 'strMeasure18': receipt.get('strMeasure18'),
		'strMeasure19': receipt.get('strMeasure19'), 'strMeasure20': receipt.get('strMeasure20')}
	# if receipt.get('strForPersons') == None and len(receipt) == 54:
	# print (len(receipt))
	receipts.update(receipt, result)
