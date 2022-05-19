const ul = document.querySelector('ul')
for(let i = 0;i < 12; i++ ) {
const li = document.createElement('li')
li.className = ('user card d-inline-block col-12 col-lg-4 col-md-6 col-xl-3 px-2')
const div = document.createElement('div')
div.className = ('user__content card-body')
const img = document.createElement('img')
img.className =  ('user__img card-img')
img.src= 'https://picsum.photos/200/300?random=11'
const h3 = document.createElement('h3')
h3.textContent = ('Jeckson   Jecksonov')
h3.className = ('user__fullname h5 mt-3')
const p = document.createElement('p')
p.textContent = ('sstoddart0@howstuffworks.com')
p.className = ('user__email h6 text-primary d-block')
const h2 = document.createElement('h2')
h2.textContent = ('Male')
h2.className = ('h6')
const h1 = document.createElement('h1')
h1.textContent = ('80.215.124.45')
h1.className = ('text-bg-info rounded text-white ps-2 h6')
div.append(img, h3, p, h2, h1)
li.append(div)
ul.append(li)
}