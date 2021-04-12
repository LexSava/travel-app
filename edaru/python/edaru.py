import re
import requests
import pymongo
import json
from datetime import datetime
import itertools

headers = {'charset': 'utf-8'}

conn = pymongo.MongoClient("192.168.1.66", 27017)
db = conn['home-planner']
receipts  = db['receipts-']
razdels  = db['razdels']

def search_recipe(query):
    url1 = "https://eda.ru/recipesearch?q='каша'&onlyEdaChecked=true"
    url2 = "http://eda.ru/recepty/zavtraki"
    url3 = "http://eda.ru/recepty/salaty"
    url4 = "http://eda.ru/recepty/supy"
    url5 = "http://eda.ru/recepty/pasta-picca"
    url6 = "https://eda.ru/recepty/pasta-picca"

    for url in razdels.find():
        print (url)

        try:
            res = requests.get(url.get('url'))
            res.encoding = 'utf-8'
            pat = re.compile(
               r'js-bookmark__obj.+?src="([^"]*)".+?horizontal-tile__item-title.+?href="([^"]*)".+?span>\s+(.+?)\s+<.+?js-portions-count-print">([^<]+)<', re.M | re.S)
            reg_list = pat.findall(res.text)
            i = 0
            for p in reg_list:
                picUrl = p[0]
                name = p[2].replace('&nbsp;', ' ')
                url = 'https://eda.ru'+p[1]
            #    print (name, url, picUrl)
                receipts.insert({'name': name, 'url': url, 'picUrl': picUrl})

        except Exception as e:
            print(e)

search_recipe('голубцы')
