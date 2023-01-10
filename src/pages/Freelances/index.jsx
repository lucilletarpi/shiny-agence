import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card';


function Freelances () {
  const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]
  return (
    <div>
      <h1>Page Freelances </h1>
        {freelanceProfiles.map((profil, index) => (
        <Card 
          key={`${profil.name}-${index}`}
          label={profil.jobTitle}
          picture ={profil.picture}
          title={profil.name}
        />
        ))}
    </div>
  )
};



export default Freelances;