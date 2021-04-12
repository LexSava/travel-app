Модуль ввода мест хранения для учёта в расчётах.

Места хранения:
Холодильник, Морозильник, Кухня, Кладовая1, Кладовая2, Кладовая3, Кладовая4, Кладовая5
емкость в литрах и температуры в местах хранения. максимальная и миинимальная.     

Данные сохраняется в LocalStorage для дальнейшего использования в приложении. 
storages:{ 
    freedge:{tMax: 6, tMin: 1, capacity: 200}, 
    freezer:{tMax: -5, tMin: -25, capacity: 160}, 
    kitchen:{tMax: 25, tMin: 18, capacity:  250}, 
    storage1:{tMax: 25, tMin: 18, capacity: 200}, 
    storage2:{tMax: 18, tMin: 10, capacity: 100}, 
    storage3:{tMax: 0, tMin: 0, capacity: 0},
    storage4:{tMax: 0, tMin: 0, capacity: 0},
    storage5:{tMax: 0, tMin: 0, capacity: 0}
}