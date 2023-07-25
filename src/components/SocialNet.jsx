import { BsLinkedin, BsGithub } from 'react-icons/bs';

const socialMediaList = [
    {
        title: "Linkedin",
        icon: <BsLinkedin />,
        path: "https://www.linkedin.com/in/luis-carrasco-320586270/"
    },
    {
        title: "github",
        icon: <BsGithub />,
        path: "https://github.com/ilmovilDev"
    }
]

export const SocialNet = () => {
    return (
        <div className='flex items-center gap-2 text-gray-500 text-xl md:text-2xl'>
            {socialMediaList.map(social => (
                <a href={social.path}
                    key={social.title}
                    target="_blank"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    )
}
