import Typed from "react-typed";

const Details = (props) => {
  // console.log(props);
  return (
    <div>
      {props.status ? (
        <div>
          <img className="rounded-full" src={props.data.avatar_url} />
        </div>
      ) : (
        <p className="text-2xl font-bold text-white min-w-[80%]  text-center py-24 ">
          <Typed
            className="text-2xl"
            strings={["Type some profile-names in the textbox to get Profiles"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
      )}
    </div>
  );
};

export default Details;
