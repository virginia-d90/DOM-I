const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//NAV ELEMENTS
// var firstChild = document.querySelector('nav a:nth-child(1)')
// firstChild.textContent = siteContent.nav["nav-item-1"]

// var secondChild = document.querySelector('nav a:nth-child(2)')
// secondChild.textContent = siteContent.nav['nav-item-2']

// var thirdChild = document.querySelector('nav a:nth-child(3)')
// thirdChild.textContent = siteContent.nav['nav-item-3']

// var fourthChild = document.querySelector('nav a:nth-child(4)')
// fourthChild.textContent = siteContent.nav['nav-item-4']

// var fifthChild = document.querySelector('nav a:nth-child(5)')
// fifthChild.textContent = siteContent.nav['nav-item-5']

// var sixthChild = document.querySelector('nav a:nth-child(6)')
// sixthChild.textContent = siteContent.nav['nav-item-6']

const newNav = document.querySelectorAll('nav a')
navArray = Array.from(newNav)

const navTexts = Object.values(siteContent.nav);
navTexts.pop();

navArray.forEach((link,index) => {
  link.textContent = navTexts[index]
})

//ADDING NEW NAV
const navAdd = document.querySelector('nav')
const newLinkCats = {
  href: '#',
  textContent: 'Cats',
}
const newLinkDogs = {
  href: '#',
  textContent: 'Dogs',
}

const newLink1 = document.createElement('a')
newLink1.href = newLinkCats.href
newLink1.textContent = newLinkCats.textContent
navAdd.appendChild(newLink1)

const newLink2 = document.createElement('a')
newLink2.href = newLinkDogs.href
newLink2.textContent = newLinkDogs.textContent
navAdd.prepend(newLink2)

//ADDING NAV COLOR()
const nav = document.querySelectorAll('nav a')
nav.forEach(link => link.style.color = 'green')


//ADDED ROUND IMAGE
const roundImg = document.querySelector('#cta-img')
roundImg.setAttribute('src', 'img/header-img.png')

//ADDED H1
const theH1 = document.querySelector('h1')
theH1.textContent = siteContent.cta['h1']

//ADDED BUTTON TEXT
const buttonText = document.querySelector('button')
buttonText.textContent = siteContent.cta['button']


const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', 'img/mid-page-accent.jpg'
)
//Trying to add h4
// var mainH4 = document.querySelectorAll('.main-content h4')
// h4Array = Array.from(mainH4)

// const h4Texts = Object.values(siteContent['main-content:nth-child(odd)']);
// h4Texts.pop();
// console.log(h4Texts)

// h4Array.forEach((item, index) => {
//   item.textContent = h4Texts[index]
// })

//FAILED ATTEMPT AT LOOPING
// const main = document.querySelectorAll('.main-content')
// mainArray = Array.from(main)

// const mainTexts = Object.values(siteContent['main-content'])
// mainTexts.pop()

// mainArray.forEach((item, index) => {
//   item.textContent = mainTexts[index]
// })

//ENTERING MAIN CONTENT H4 ELEMENTS
const h4Holder= document.querySelectorAll('h4')

const firstH4 = h4Holder[0]
firstH4.textContent = siteContent['main-content']['features-h4']

const secondH4 = h4Holder[1]
secondH4.textContent = siteContent['main-content']['about-h4']

const thirdH4 = h4Holder[2]
thirdH4.textContent = siteContent['main-content']['services-h4']

const fourthH4 = h4Holder[3]
fourthH4.textContent = siteContent['main-content']['product-h4']

const fifthH4 = h4Holder[4]
fifthH4.textContent = siteContent['main-content']['vision-h4']

// ENTERING MAIN CONTENT P ELEMENTS
const pHolder = document.querySelectorAll('p')

const firstP = pHolder[0]
firstP.textContent = siteContent['main-content']['features-content']

const secondP = pHolder[1]
secondP.textContent = siteContent['main-content']['about-content']

const thirdP = pHolder[2]
thirdP.textContent = siteContent['main-content']['services-content']

const fourthP = pHolder[3]
fourthP.textContent = siteContent['main-content']['product-content']

const fifthP = pHolder[4]
fifthP.textContent = siteContent['main-content']['vision-content']

//CONTACT SECTION
const contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent.contact['contact-h4']

const contactP1 = pHolder[5]
contactP1.textContent = siteContent.contact['address']

const contactP2 = pHolder[6]
contactP2.textContent = siteContent.contact['phone']

const contactP3 = pHolder[7]
contactP3.textContent = siteContent.contact['email']

//FOOTER
const footText = document.querySelector('footer p')
footText.textContent = siteContent.footer['copyright']