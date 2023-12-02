import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/Mentorship.png";
import courseImg2 from "../../assests/images/coming_soon1.png";
import courseImg3 from "../../assests/images/coming_soon1.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Boost Your Admission Chances with Expert Preparation Support!",
    lesson: 12,
    students: 0,
    rating: 0,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Coming Soon!",
    lesson: 0,
    students: 0,
    rating: 0,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Coming Soon!",
    lesson: 0,
    students: 0,
    rating: 0,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-6">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-4"> Our Courses</h2>
                <p>
                Admission Bootcamp 1.00 আমাদের যাত্রাটি শুরু হবে ৫০ জন স্বপ্নবাজ শিক্ষার্থীর হাত ধরে যাদের এইচএসসি জিপিএ ৫ এর কম। 

                আগামী ৩ মাস তাদের নিয়ে আমরা একটি প্রক্রিয়ার মধ্য দিয়ে যাবো যেখানে আমরা অন্য কোচিং কিংবা প্রাইভেটের মতো প্রতিনিয়ত ক্লাস পরীক্ষা নেবো না। বরং মেন্টরিং, গাইডলাইন, সমস্যা সমাধান, বিভিন্ন কৌশল শেখানো সহ আরও বেশ কিছু জিনিস নিয়ে কাজ করবো। তবে এই বুটক্যাম্পে অনেকগুলো ক্লাস-পরীক্ষাও‌ থাকবে। পুরো সিস্টেমটা Discord Platform এ হবে‌ যাতে পড়াশোনা থেকে মনোযোগ দূরে না যায়। এছাড়াও একজন শিক্ষার্থী চাইলে তার মেন্টরের সাথে যেকোনো বিষয়ে সরাসরি পরামর্শ, প্রশ্নের সমাধান চাইতে পারবে। 

                একটা পূর্বগঠিত প্লান দেওয়া হবে যা আগামী ৩ মাসে শেষ করে গুচ্ছ বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য প্রস্তুত করে তোলা হবে। 
                </p>
              </div>

              {/* <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
