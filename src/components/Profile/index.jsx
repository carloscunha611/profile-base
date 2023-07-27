/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <img id={props.avatar} className={styles.avatar} src="" alt=""/>
      <Title>
        {props.name}
        <button>+</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
      <div className={styles.links}>
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.portfolioUrl}>Portifólio</LinkButton>
      </div>
      </ProfileSection>
    </div>
  )
}