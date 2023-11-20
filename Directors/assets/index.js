// Массив объектов
const directorsInfo = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

// Добавляем недостающий объект в массив 
let newDirector = {
      name: 'Виктор Шамиров',
      career: 'Режиссер, Сценарист, Актёр, Продюсер, Монтажёр',
      films: 'https://www.film.ru/person/viktor-shamirov',
      top_rated_film: 'Со мною вот что происходит'
}
directorsInfo.splice(2, 0, newDirector);

// Находим элементы DOM
  const list = document.querySelector(".directors__list");
  const moviesList = document.querySelector ('.movies__list');

// Передаем инфо объектов массива в элементы DOM
directorsInfo.forEach(item => {

// Создаем пункты списка 
    const directorsList = document.createElement('li');
    list.append(directorsList);
    directorsList.classList.add('director-li');

// Добавляем имена режиссеров
    const directorsName = document.createElement('h3');
    directorsList.append(directorsName);
    directorsName.classList.add('director-name');
    directorsName.textContent = item.name;

// Добавляем карьеру и ссылку
    const directorsCareerAndLink = document.createElement('div');
    const directorCareer = document.createElement('p');
    const directorLinkContainer = document.createElement('p');
    const divider = document.createElement('hr');
    const directorLink = document.createElement('a');
    directorLink.setAttribute ('href', item.films);

    directorCareer.classList.add('director-career');
    directorsCareerAndLink.classList.add('career-link');
    directorLinkContainer.classList.add('director-link');
    
    directorsList.append(directorsCareerAndLink);
    directorsList.append(divider);
    directorsCareerAndLink.append(directorCareer);
    directorsCareerAndLink.append(directorLinkContainer);
    directorLinkContainer.append(directorLink);

    
    directorCareer.textContent = item.career;
    directorLink.textContent = "Фильмография"; 
  }
  )
  
// Добавляем лучшие фильмы
    topFilmsList = directorsInfo.map(item => {
      return item.top_rated_film;    
    })
    moviesList.textContent = `"${topFilmsList.join('", "')}"`;
