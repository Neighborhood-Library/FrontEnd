import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Shawn Henry',
      profile: 'https://github.com/shenry45',
      role: 'Front & Back End'
    },
    {
      name: 'Shobhita Vaishnav',
      profile: 'https://github.com/shobhitav',
      role: 'Back End'
    },
    {
      name: 'Ali Rajaii',
      profile: 'https://github.com/rajaii',
      role: 'Back End'
    },
    {
      name: 'Carlos Sanchez',
      profile: 'https://github.com/Lohrem',
      role: 'Front End'
    },
    {
      name: 'Mariana Huh',
      profile: 'https://github.com/marianahuh',
      role: 'Front End'
    },
    {
      name: 'Oscar Valenzuela',
      profile: 'https://github.com/oscarv0101',
      role: 'Front End'
    },
    {
      name: 'Joshua Stevens',
      profile: 'https://github.com/JustSpokenCodes',
      role: 'Front End'
    }
  ];

  return (
    <div className="page-wrap">
      <section className='card'>
        <h1 className="card-title">About</h1>
        <hr />
        <p>As people who have a Deep appreciation for printed books, we wanted to be able to speak to others about the mental adventures we go through everytime we dive back into our favorite book. This allows book lovers of all ages and genres to interact with each other and share their own books with others.
        </p>
        <p>
        Libraries are "places of <b>Freedom</b>” — <strong>Freedom</strong> to Choose, <strong>Freedom</strong> to Discover, <strong>Freedom</strong> to Question — <strong>Freedom</strong> to Borrow! In a world where very little is ever truly ‘free’, libraries are champions of <strong>Freedom</strong>." In this app, we provide a <b><em>Simple and Feature-Rich</em></b> solution for lending and borrowing books to/from fellow users.
        </p>
      </section>
      <section className='card'>
        <h2 className="card-title">Team</h2>
        <hr />
        <div className="team-cont">
          {
            team.map(memb => {
              return <div key={memb.name}>
                <p className="text-bold">
                  <a href={memb.profile} target="_blank" rel="noopener noreferrer">
                    {memb.name}
                  </a>
                </p>
                <p className='about-role'>{memb.role}</p>
              </div>
            })
          }
        </div>
      </section>
    </div>
  )
}

export default About;
