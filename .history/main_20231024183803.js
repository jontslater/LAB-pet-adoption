const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images.dinosaurpictures.org/Majungasaurus-_Phil-Brownlow_a382.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://s.hdnux.com/photos/01/27/75/65/23059781/3/1200x0.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://cdn.mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920-1155x770.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://d.newsweek.com/en/full/2102648/triceratops.jpg?w=1600&h=1200&q=88&f=2687ac9aa4400ab564771afb8e48536a"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=2000"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://ychef.files.bbci.co.uk/976x549/p0dnw01b.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://cdn.britannica.com/25/172925-050-DC7E2298/black-cat-back.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.freepik.com/premium-photo/dinosaur-playing-video-game-with-controller-foreground_561855-6677.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://a-z-animals.com/media/2021/11/Oriental-Shorthair-1-1024x535.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://developer-blogs.nvidia.com/wp-content/uploads/2022/02/AdobeStock_296431397-1.jpg"
    }
  ];

  const renderToDom = (pets) => {

  
  let domString = "";

  for(let pet of pets){
    
    domString += `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <button type="button" class="btndelete" id="delete--${pet.id}" "btn-danger">Delete</button>
        <img src="${pet.imageUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">${pet.name}</h2>
          <h6 class="card-title">${pet.color}</h6>
          <p class="card-title">${pet.specialSkill}.</p>
          <footer><h5 class="card-footer">${pet.type}</h5></footer>
        </div>
      </div>
    </div>
  </div>`
  }
  
  app.innerHTML = domString
}

renderToDom(pets)



dogButton.addEventListener('click', ()=>{
  dogfilter("dog")
})

const dogfilter = () => {
  let dogArray = []
  for(pet of pets){
    if(pet.type === 'dog'){
      dogArray.push(pet);
    }
  }
  renderToDom(dogArray);
}

catButton.addEventListener('click', ()=>{
  catfilter("cat")
})

const catfilter = () => {
  let catArray = [];
  for(pet of pets){
    if(pet.type === 'cat'){
      catArray.push(pet);
    }
  }
  renderToDom(catArray);
}

dinoButton.addEventListener('click', ()=>{
  dinofilter("dino")
})

const dinofilter = () => {
  let dinoArray = [];
  for(pet of pets){
    if(pet.type === 'dino'){
      dinoArray.push(pet);
    }
  }
  renderToDom(dinoArray);
}


dinoButton.addEventListener('click', dinofilter);
dogButton.addEventListener('click', dogfilter);
catButton.addEventListener('click', catfilter);
showAllButton.addEventListener('click', () => {renderToDom(pets);
});





	
const createPet = (event) => {
		event.preventDefault();

		const newPet = {
			id: pets.length + 1,
			name: document.querySelector("#name").value,
			type: document.querySelector("#type").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
		}
		pets.push(newPet);
		renderToDom(pets);
		form.reset();
	}
  
  
  
  
  
  app.addEventListener('click', (event) => {
    if (event.target.id.includes("delete")) {
      const [ , id] = event.target.id.split("--");
      const index = pets.findIndex(event => event.id === Number(id));
      pets.splice(index, 1);
      renderToDom(pets);
    };
  });

  
  const events = () => {
    const app = document.querySelector("#app");
    const form = document.querySelector('form');
    const dogButton = document.querySelector('#dogss')
    const catButton = document.querySelector('#catss')
    const dinoButton = document.querySelector('#dinoss')
    const showAllButton = document.querySelector('#showallss');

    
  }

  const startApp = () => {;
    renderToDom(pets);
    events()
  }

  startApp()
	
