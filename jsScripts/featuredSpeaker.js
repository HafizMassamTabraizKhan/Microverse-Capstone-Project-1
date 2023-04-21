const speakersData = [
  {
    speakerName: 'Emad Aghajani',
    speakerAffiliation: 'Software Engineer',
    speakerInfo: 'Emad Aghajani is a postdoctoral researcher at the SEART research group, at Software Institute, USI, Switzerland.',
    speakerImage: './images/contributor1.jpg',
  },
  {
    speakerName: 'Juliana Alves Pereira',
    speakerAffiliation: 'St Gallen University',
    speakerInfo: 'Juliana is a Lecturer (Assistant Professor) in Software Engineering at the School of Computing Science, University of Glasgow, United Kingdom.',
    speakerImage: './images/speaker2.jpg',
  },
  {
    speakerName: 'Saba Alimadadi',
    speakerAffiliation: 'Simon Fraser University',
    speakerInfo: 'Saba Alimadadi is an Assistant Professor in the Department of Computer Science and Engineering at Simon Fraser University.',
    speakerImage: './images/speaker3.jpg',
  },
  {
    speakerName: 'Sven Apel',
    speakerAffiliation: 'Saarland University',
    speakerInfo: 'Sven Apel is an associate professor in the School of Electrical Engineering and Computer Science at Washington State University, Pullman.',
    speakerImage: './images/speaker4.jpg',
  },
];

function renderFeaturedSpeakers() {
  const featureSection = document.querySelector('.featured-speakers');
  const projectOverlay = document.createElement('div');
  projectOverlay.classList.add('container');

  let cardContent = `<h2>Featured Speakers</h2>
        <hr class="heading-undeline">
        <ul class="speakers">`;

  for (let i = 0; i < speakersData.length; i += 1) {
    const featuredSpeakerInf = speakersData[i];

    cardContent += `
              
            <li class="speaker speaker-${i + 1}">
                <div class="bgFrame"><img class="Contributor" src="${featuredSpeakerInf.speakerImage}" alt="Speaker Picture"></div>
                <ul class="Contributor-detail">
                    <li class="Contributor-name">
                        <h3>${featuredSpeakerInf.speakerName}</h3>
                    </li>
                    <li class="Contributor-affiliation">
                        <h4>${featuredSpeakerInf.speakerAffiliation}</h4>
                    </li>
                    <li class="contributor-description">
                        <p>${featuredSpeakerInf.speakerInfo}
                        </p>
                    </li>
                </ul>
            </li>`;
  }

  cardContent += `</ul>
        <button class="seeMoreBtn">More <i class="fa-solid fa-angle-down down-arrow"></i></button>
        <button class="speaker-3 less">Less <i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  projectOverlay.innerHTML = cardContent;
  featureSection.appendChild(projectOverlay);

  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const speaker3 = document.querySelector('.speaker-3');
  const speaker4 = document.querySelector('.speaker-4');

  function seeMore() {
    seeMoreBtn.setAttribute('class', 'speaker-3');
    speaker3.classList.remove('speaker-3');
    speaker4.classList.remove('speaker-4');
    seeLessBtn.setAttribute('class', 'seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.setAttribute('class', 'speaker-3 less');
    speaker3.classList.add('speaker-3');
    speaker4.classList.add('speaker-4');
    seeMoreBtn.setAttribute('class', 'seeMoreBtn');
  }

  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', renderFeaturedSpeakers);
