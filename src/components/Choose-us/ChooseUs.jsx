import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/thumb.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2 className="mb-4">Why Choose Us</h2>
              <p>
              আমরা এই জিনিসটা করছি শুধু মাত্র ২২ বিশ্ববিদ্যালয়ের যে সমন্বিত ভর্তি পরীক্ষা হয় সেটিকে কেন্দ্র করে। আমাদের লক্ষ্য এই ৫০ জন সদস্যের মধ্যে যাতে একটি বড় অংশ ভর্তি হতে পারে।

              আমারা কখনোই সবাইকে ভর্তির নিশ্চয়তা দিচ্ছি না। বরং মেন্টরিং এর মাধ্যমে তাদের পড়াশোনার অগ্রগতিতে একজন সহায়তাকারী হিসেবে সবসময় পাশে আছি।

              আমরা অন্যদের চেয়ে আলাদা কারণ আমরা শুধু ক্লাস পরীক্ষা বিষয়টির মধ্যে সীমাবদ্ধ থাকি না। বরং সবসময় শিক্ষার্থীর বিভিন্ন সমস্যা, দিকনির্দেশনা, কৌশলগত দিক সম্পর্কে ধারণা দিয়ে থাকি। আমরা মনে করি একজন মেন্টর একজন শিক্ষার্থীর বন্ধু হিসেবে সবসময় পাশে থাকে। 

              আমাদের প্রতিষ্ঠান " Kharap Student " নামটির পেছনের গল্প হলো সমাজের কিছু হতাশাগ্রস্থ শিক্ষার্থী যারা অন্যের তুলনায় সামান্য কম ফলাফল করলে পরিবার কিংবা সমাজের বিভিন্ন মানুষের দ্বারা বুলিং এর স্বীকার হয়। কিন্তু তাদের প্রতিভা প্রকাশের সুযোগ গুলো সংকীর্ণ হয়ে যায়। আমাদের কাজ সেসকল শিক্ষার্থীদের নিয়ে কাজ করে তাদের মেধা বিকাশে সহায়তা করা।
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=HCygq6rF_SA"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
