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
receipts = db['receip']

# result = {'idMeal': '', 'strMeal': '', 'strDrinkAlternate': '', 'strSource': '', 'strDescription': '', 'strRequestsCounter': 0,
# 	'strCategory': '', 'strArea':	'', 'strInstructions':	'', 'strMealThumb': '', 'strTags': '', 'strForPersons': 0,
# 	'strYoutube': '', 'strIngredient1': '', 'strIngredient2': '', 'strIngredient3': '', 'strIngredient4': '', 'strIngredient5': '',
# 	'strIngredient6': '', 'strIngredient7': '', 'strIngredient8': '', 'strIngredient9': '', 'strIngredient10': '',
# 	'strIngredient11': '', 'strIngredient12': '', 'strIngredient13': '', 'strIngredient14': '', 'strIngredient15': '',
# 	'strIngredient16': '', 'strIngredient17': '', 'strIngredient18': '', 'strIngredient19': '', 'strIngredient20': '', 
# 	'strMeasure1': '', 'strMeasure2': '', 'strMeasure3': '', 'strMeasure4': '', 'strMeasure5': '', 'strMeasure6': '', 
# 	'strMeasure7': '', 'strMeasure8': '', 'strMeasure9': '', 'strMeasure10': '', 'strMeasure11': '', 'strMeasure12': '', 'strMeasure13': '',
# 	'strMeasure14': '', 'strMeasure15': '', 'strMeasure16': '', 'strMeasure17': '', 'strMeasure18': '', 'strMeasure19': '', 'strMeasure20': ''
# 	}
result = {'idMeal': '', 'strMeal': '', 'strDrinkAlternate': '', 'strSource': '', 'strDescription': '', 'strRequestsCounter': 0,
	'strCategory': '', 'strArea':	'', 'strInstructions':	'', 'strMealThumb': '', 'strTags': '', 'strForPersons': 0,
	'strYoutube': '', 'strIngredient1': '', 'strIngredient2': '', 'strIngredient3': '', 'strIngredient4': '', 'strIngredient5': '', 
	'strMeasure1': '', 'strMeasure2': '', 'strMeasure3': '', 'strMeasure4': '', 'strMeasure5': ''
	}

def search_recipe(query):
    return rutorPagesCountForResults(loadURLContent(query))
 
def rutorPagesCountForResults(content):
	soup = BeautifulSoup(content, 'html.parser')
	
	if (soup == None):
		raise ValueError("Ошибка. Невозможно инициализировать HTML-парсер, что-то не так с контентом.")
	
	try:
		description = soup.find('p', {'class': 'recipe__description'})
	except:
		raise ValueError("Ошибка. Нет блока с описания.")
	if description == None:
		raise ValueError("Ошибка. Нет блока с описания.")
    
	breadcrumbs = soup.find('ul', {'class': 'breadcrumbs'})
	categorys = breadcrumbs.findAll('li')
	print ()
	category = re.sub(r"\n", "", categorys[0].text)
	area = ''
	if len(categorys) >= 2:
		area = re.sub(r"\n", "", categorys[1].text)
	ingredients = soup.find('ul', {'class': 'breadcrumbs'})
	ingredients = soup.find('div', {'class': 'ingredients-list__content'})
	ingredientNamesSpans = ingredients.findAll('span', {'class': 'js-tooltip js-tooltip-ingredient'})
	ingredientWeightsSpans = ingredients.findAll('span', {'class': 'content-item__measure'})   
	i=1
	for p in ingredientNamesSpans:
		ntext = re.sub(r"\r\n\s{1,10}", "", p.text)
		result.update ({'strIngredient' + str(i): ntext, 'strMeasure' + str(i): ingredientWeightsSpans[i-1].text})
		# result.update(ntext + "=" + ingredientWeightsSpans[i].text)
		i = i + 1

	result.update ({'strCategory': category, 'strArea': area})
	print(result.get('strMeal'))  
	return result

def loadURLContent(url, headers={}, attempts=1):
	opener = urllib.request.build_opener()
	request = urllib.request.Request(url, headers=headers)
	response=None
	n = attempts
	while n > 0: 
		try:
			response = opener.open(request)
			break
		except:
			n = n - 1
			if (n <= 0):
				raise ConnectionError("Ошибка соединения. Все попытки соединения израсходованы.")
	
	if response.info().get("Content-Encoding") == "gzip":
		gzipFile = gzip.GzipFile(fileobj=response)
		content = gzipFile.read().decode("utf-8")
	else:
		content = response.read().decode("utf-8")
		
	return content

# for receipt in receipts.find():
# 	if receipt.get('strForPersons') == 0:
# 		print (receipt.get('strMeal'))
	# 	result.update(receipt)
print (search_recipe('https://eda.ru/recepty/salaty/zimnij-ovoschnoj-salat-27074'))
		# receipts.update(receipt, search_recipe(result.get('strSource')))
