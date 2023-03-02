export const LinksCard = ({ icon, link }) => {
  return (
    <>
      <a href={link} className="fs-1 text-center link-card" target="_blank" >
        <i className={icon}></i>
      </a>
    </>
  )
}