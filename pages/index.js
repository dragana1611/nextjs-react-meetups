//our-domain.com/new-meetup
// import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  // return <MeetupList meetups={DUMMY_MEETUPS} />;
  return <MeetupList meetups={props.meetups} />;
}

export const getStaticProps = async () => {
  //fetch data from an API/DB
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // if data change more frequently, there is an extra property. When we add this property to the object returned by getStaticProps, we unlock a feature called incremental Static Generation. This number is the number of seconds NextJS will wait until it regenerates this page for an incoming request.
  };
};

// //This now only works in our page component files, not in other component files. Only in component files inside of the pages folder.  NextJS will look for a function with that name and if it finds it, it executes this function during this pre-rendering process. The code in this f-on will never be executed on the client side. Returns an object with static props
// //One of the main features of NextJS, this data fetching for pre-rendering.

// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API/DB
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export default HomePage;

//We should only use getServerSideProps if we need access to that concrete request object.  Or if we have data that changes multiple times every second, then therefore even revalidate won't help us, then getServerSideProps is a great choice.
