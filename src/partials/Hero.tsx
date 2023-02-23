import { GradientText, HeroAvatar, Section } from 'astro-boilerplate-components'

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Shaul</GradientText> 👋
        </>
      }
      description={
        <>
          An ordinary programmer, very interested in{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://reactjs.org/"
            target="_blank"
          >
            React
          </a>{' '}
          and <span className="text-cyan-400">DevOps</span>, dedicated to
          becoming an excellent programmer.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        null
        // <>
        //   <a href="/">
        //     <HeroSocial
        //       src="/assets/images/twitter-icon.png"
        //       alt="Twitter icon"
        //     />
        //   </a>
        //   <a href="/">
        //     <HeroSocial
        //       src="/assets/images/facebook-icon.png"
        //       alt="Facebook icon"
        //     />
        //   </a>
        //   <a href="/">
        //     <HeroSocial
        //       src="/assets/images/linkedin-icon.png"
        //       alt="Linkedin icon"
        //     />
        //   </a>
        //   <a href="/">
        //     <HeroSocial
        //       src="/assets/images/youtube-icon.png"
        //       alt="Youtube icon"
        //     />
        //   </a>
        // </>
      }
    />
  </Section>
)

export { Hero }
