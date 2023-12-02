import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-3 hero__title">
              উচ্চতা ছুঁয়ে স্বপ্নের আকাশ,<br></br>
              আগ্রহে জ্বলবে তোমার পথের দীপ্তি।<br></br>
              বিজয়ের ময়দানে হাজির হবে,<br></br>
              উচ্ছসিত নতুন এক তুমি।<br></br>
              </h2>
              <p className="mb-5">
              আমরা মনে করি কোন শিক্ষার্থী খারাপ নয়। তবে সমাজে প্রচলিত নিয়মে অনেকেই ব্যাকবেঞ্চার কিংবা খারাপ শিক্ষার্থী হিসেবে আখ্যায়িত করে থাকে। 
              আমরা সেই সকল খারাপ শিক্ষার্থী কে নিয়ে কাজ করতে চাই যারা প্রকৃত অর্থে কখনোই খারাপ নয়। 
              আমরা এই প্লাটফর্মে তাদের সাথে কাজ করব যাদের ফলাফল তুলনামূলকভাবে একটু কম। 
              আমাদের সর্বোচ্চ প্রচেষ্টা থাকবে তাদের শিক্ষা জীবনে একজন মেন্টর হিসেবে পাশে থাকার।
              </p>
            </div>
            <div>
              <button className="btn">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFsvg38rNAm553cmzwHRLObJVU_CgElKpukpp3s175OkR3mQ/viewform" target="_blank" className="btn" rel="noopener noreferrer">
                  Apply Here
                </a>
              
              </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
