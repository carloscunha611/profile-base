/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

function handleClick(ev){
  console.log(ev)
  alert('Você agora está seguindo!')
}

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img id={props.avatar} className={styles.avatar} src="" alt=""/>
      <Title>
        {props.name}
        <button onClick={handleClick}>+</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
      <div className={styles.links}>
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.portfolioUrl}>Portifólio</LinkButton>
      </div>
      </ProfileSection>
    </div>
  )
}