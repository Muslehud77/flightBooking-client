import FlightCard from '../../Components/Flights/FlightCard';
import useMyBookings from '../../Api/useMyBookings';
import MyProfile from './myProfile';


const Profile = () => {

    const {bookings,refetch,isFetching} = useMyBookings()



    return (
      <div className='flex flex-col justify-center items-center'>
        <MyProfile/>
        {isFetching ? (
          <div className="flex justify-center my-10">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <h2 className="text-5xl text-center my-10">
            {" "}
            {!isFetching && bookings.length
              ? "My Bookings"
              : "No Bookings Available"}
          </h2>
        )}
        {bookings.length &&
          bookings?.map((booking) => (
            <FlightCard
              refetch={refetch}
              key={booking._id}
              flight={booking.flight}
            />
          ))}
      </div>
    );
};

export default Profile;