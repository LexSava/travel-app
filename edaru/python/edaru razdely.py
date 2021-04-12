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
receiptsUrl = db['receipts-urls']
razdels = db['razdels']

def search_recipe(query):
    url = 'https://eda.ru'
    rutorPagesCountForResults(loadURLContent(url))
 
def rutorPagesCountForResults(content):
	soup = BeautifulSoup(content, 'html.parser')
	
	if (soup == None):
		raise ValueError("Ошибка. Невозможно инициализировать HTML-парсер, что-то не так с контентом.")
	
	try:
		footer = soup.find('section', {'class': 'seo-footer'})
	except:
		raise ValueError("Ошибка. Нет блока с описания.")
	if footer == None:
		raise ValueError("Ошибка. Нет блока с описания.")
    
	footerList = footer.findAll('li', {'class': 'seo-footer__list-item'})
	
	footerUrls = {}

	i = 0

	for p in footerList:
		name = re.sub(r"\s\s\d{1,4}", "", p.a.text)
		url = 'https://eda.ru' + p.a.get('href')
		print (url, name)
	# 	text = p.text.replace('\r\n          ', '')
	# 	ntext = text.replace('\r\n        ', '')

		razdels.insert({'name': name, 'url': url})
    
	return footerList

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

search_recipe("some")