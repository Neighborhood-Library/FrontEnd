import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Brandon Desselle',
      profile: 'https://github.com/BDesselle',
      img: './img/brandon-desselle.jpg'
    },
    {
      name: 'Cam Perry',
      profile: 'https://github.com/cpscott1',
      img: './img/cam-perry.jpg'
    },
    {
      name: 'Ali Rajaii',
      profile: 'https://github.com/rajaii',
      img: './img/ali-rajaii.jpg'
    },
    {
      name: 'Shobhita Vaishnav',
      profile: 'https://github.com/shobhitav',
      img: './img/shobhita-vaishnav.jpg'
    },
    {
      name: 'Carlos Sanchez',
      profile: 'https://github.com/Lohrem',
      img: './img/carlos-sanchez.jpg'
    },
    {
      name: 'Mariana Huh',
      profile: 'https://github.com/marianahuh',
      img: './img/mariana-huh.jpg'
    },
    {
      name: 'Joshua Stevens',
      profile: 'https://github.com/JustSpokenCodes',
      img: './img/joshua-stevens.jpg'
    },
    {
      name: 'Oscar Valenzuela',
      profile: 'https://github.com/oscarv0101',
      img: './img/oscar-valenzuela.jpg'
    },
    {
      name: 'Shawn Henry',
      profile: 'https://github.com/shenry45',
      img: './img/shawn-henry.jpg'
    }
  ];

  return (
    <div className="page-wrap">
      <section>
        <h1>About Us</h1>
        <hr />
        <p>
          Praesent neque nisi, hendrerit vel vestibulum nec, cursus eget augue. Curabitur a vulputate nunc. Fusce maximus nisl nibh, rutrum tempus tortor tristique non. Duis eget ornare diam, nec placerat elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper ante ipsum, eget feugiat dolor venenatis quis. Quisque ultricies laoreet ligula, eu iaculis nibh pulvinar ac. Curabitur convallis justo sed ultrices ullamcorper. Integer eget congue erat.
        </p>
      </section>
      <section>
        <h2>Team</h2>
        <hr />
        <div className="team-cont">
          {
            team.map(memb => {
              return <div key={memb.name}>
                <img src={memb.img} alt="team member"/>
                <p>
                  <a href={memb.profile} target="_blank" rel="noopener noreferrer">
                    {memb.name}
                  </a>
                </p>
              </div>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default About;