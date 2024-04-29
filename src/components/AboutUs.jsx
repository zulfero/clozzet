function AboutUs(image, heading, paragraph) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
export default AboutUs;
