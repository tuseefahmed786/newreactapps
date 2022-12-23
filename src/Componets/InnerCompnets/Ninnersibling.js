import {React} from "react";

export default function Ninnersibling(props) {


 
  return (
    <>
      <div className="In_second">
        <table>
          <tr>
            { props.depend ? id1.map((eth) => {
              return <Innerth key={eth.id} headingName={eth.th} />;
            }): id2.map((eth) => {
              return <Innerth key={eth.id} headingName={eth.th} />;
            })}
          </tr>
          <tr>
            { props.depend ? id11.map((edt) => {
              return <Innertd dataName={edt.dt} tdlink={edt.dtlink} key={edt.id} />;
            }): id22.map((edt) => {
              return <Innertd dataName={edt.dt} tdlink={edt.dtlink} key={edt.id} />;
            })}
          </tr>
        </table>
      </div>
    </>
  );
}
function Innerth(props) {
  return (
    <>
      <th>{props.headingName}</th>
    </>
  );
}

function Innertd(props) {
  return (
    <>
      <td><a href={props.tdlink} target="blank" >{props.dataName}</a></td>
    </>
  );
}
// const hd = [
//   {
//     th: "The Christmas Shop",
//     id: 1,
//   },
//   {
//     th: "Christmas Lights",
//     id: 2,
//   },
//   {
//     th: "Christmas Outdoor Decor",
//     id: 4,
//   },
// ];

// const td = [
//   {
//     dt: "Shop now",
//     dtlink: "https://www.walmart.com/cp/food/976759?povid=976759_variation_flyout_976759_food_Rweb_07_14",
//     id: 1,
//   },
//   {
//     dt: "All Christmas Lights",
//     dtlink: "https://www.walmart.com/browse/home/christmas-lights/4044_2634414_7472650_3602319?povid=GlobalNav_DSK_Christmas-Lights",
//     id: 2,
//   },
//   {
//     dt: "Christmas Inflatables",
//     dtlink: "https://www.walmart.com/browse/home/outdoor-christmas-decorations/4044_2634414_7472650_4622223?povid=GlobalNav_DSK_Christmas-Outdoor",
//     id: 3,
//   },
//   {
//     dt: "Dolls & Dollhouses",
//       dtlink: "https://www.walmart.com/cp/dolls-dollhouses/4187?povid=GlobalNav_DSK_Toys-VideoGamesToysDolls-Dollhouses",
//     id: 4,
//   },
//   {
//     dt: "Christmas Installation",
//       dtlink: "https://www.walmart.com/cp/christmas-light-installation/8428919?povid=GlobalNav_DSK_Christmas-LightService",
//     id: 5,
//   },
//   {
//     dt: "Christmas Books",
//       dtlink: "https://www.walmart.com/browse/books/christmas-advent-kids-books/3920_582053_585922_585988?povid=GlobalNav_DSK_Christmas-Books",
//     id: 6,
//   },
// ];


const id1 = [
    {
      th: "The Christmas Shop",
      id: 1,
    },
    {
      th: "Christmas Lights",
      id: 2,
    },
    {
      th: "Christmas Outdoor Decor",
      id: 4,
    },
  ];
  
  const id11 = [
    {
      dt: "Shop now",
      dtlink: "https://www.walmart.com/cp/food/976759?povid=976759_variation_flyout_976759_food_Rweb_07_14",
      id: 1,
    },
    {
      dt: "All Christmas Lights",
      dtlink: "https://www.walmart.com/browse/home/christmas-lights/4044_2634414_7472650_3602319?povid=GlobalNav_DSK_Christmas-Lights",
      id: 2,
    },
    {
      dt: "Christmas Inflatables",
      dtlink: "https://www.walmart.com/browse/home/outdoor-christmas-decorations/4044_2634414_7472650_4622223?povid=GlobalNav_DSK_Christmas-Outdoor",
      id: 3,
    },
    {
      dt: "Dolls & Dollhouses",
        dtlink: "https://www.walmart.com/cp/dolls-dollhouses/4187?povid=GlobalNav_DSK_Toys-VideoGamesToysDolls-Dollhouses",
      id: 4,
    },
    {
      dt: "Christmas Installation",
        dtlink: "https://www.walmart.com/cp/christmas-light-installation/8428919?povid=GlobalNav_DSK_Christmas-LightService",
      id: 5,
    },
    {
      dt: "Christmas Books",
        dtlink: "https://www.walmart.com/browse/books/christmas-advent-kids-books/3920_582053_585922_585988?povid=GlobalNav_DSK_Christmas-Books",
      id: 6,
    },
  ];




  const id2 = [
      {
        th: "Toy Deals",
        id: 1,
      },
      {
        th: "Xbox",
        id: 2,
      },
      {
        th: "Kids Bikes",
        id: 4,
      },
    ];
    
    const id22 = [
      {
        dt: "Toy Rollbacks",
        dtlink: "https://www.walmart.com/shop/deals/toys/toy-rollbacks?povid=GlobalNav_DSK_Toys-VideoGamesToyDealsToyRollbacks",
        id: 1,
      },
      {
        dt: "All Shop Xbox",
        dtlink: "https://www.walmart.com/cp/xbox-series-x/9206773?povid=GlobalNav_DSK_Toys-VideoGamesXboxShopallXbox",
        id: 2,
      },
      {
        dt: "All Kids Bikes",
        dtlink: "https://www.walmart.com/browse/sports-outdoors/kids-bikes/4125_1081404_9240575?povid=GlobalNav_DSK_Toys-VideoGamesKidsBikesShopallKidsBikes",
        id: 3,
      },
      {
        dt: "Toy Clearance",
          dtlink: "https://www.walmart.com/shop/deals/clearance?catId=4171",
        id: 4,
      },
      {
        dt: "Toys Barbie",
          dtlink: "https://www.walmart.com/cp/barbie/2862450?povid=GlobalNav_DSK_Toys-VideoGamesFeaturedBrandsBarbie",
        id: 5,
      },
      {
        dt: "Xbox Accessories",
          dtlink: "https://www.walmart.com/browse/xbox-series/xbox-accessories/2636_9206773_6412358?povid=GlobalNav_DSK_Toys-VideoGamesXboxXboxAccessories",
        id: 6,
      },
      {
        dt: "Ages 5 to 7 years",
          dtlink: "https://www.walmart.com/cp/toys-for-kids-5-to-7-years/617941?povid=GlobalNav_DSK_Toys-VideoGamesToysbyAgeAges5to7years",
        id: 7,
      },
      {
        dt: "Bike Helmets",
          dtlink: "https://www.walmart.com/browse/sports-outdoors/bike-helmets/4125_1081404_7258752_6249551?povid=GlobalNav_DSK_Toys-VideoGamesKidsBikesHelmets-Pads",
        id: 8,
      },
      {
        dt: "XboxGames",
          dtlink: "https://www.walmart.com/browse/xbox-series/xbox-games/2636_9206773_5008697?povid=GlobalNav_DSK_Toys-VideoGamesXboxXboxGames",
        id: 9,
      },
      {
        dt: "",
          dtlink: "",
        id: 10,
      },
      {
        dt: "",
          dtlink: "",
        id: 11,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
      {
        dt: "",
          dtlink: "",
        id: 7,
      },
    ];
    
// Preschool Toys
// 
// Ages 8 to 11 years
// Ages 12+ years
// Featured Brands
// Shop all Toy Brands
// Barbie
// LEGO
// Squishmallows
// Star Wars
// Fisher-Price
// Favorite Characters
// Character Shop
// Black Panther
// Bluey
// CoComelon
// Paw Patrol
// Toys
// Shop all Toys
// LEGO & Building Sets
// Dolls & Dollhouses
// Action Figures
// Cars, Drones & RC
// Plush Animals
// Pretend Play
// Arts & Crafts
// Learning Toys
// S.T.E.A.M.
// Games & Puzzles
// Outdoor Play
// Shop all Outdoor Play
// Swing Sets
// Kids' Playhouses
// NERF & Blaster Toys
// Sports Toys
// Trampolines
// Swimming Pools & Supplies
// Ride Ons
// Shop all Ride Ons
// Hoverboards
// Scooters
// Skates & Skateboards
// Kids Bikes
// Shop all Kids Bikes
// Helmets & Pads
// Collectibles
// Shop all Collectibles
// Funko Shop
// Trading Cards
// Collectible Action Figures
// Collectible Dolls
// Vinyl Figures
// Bobbleheads
// Coins & Bullion
// Video Games
// Shop all Video Games
// Video game accessories
// Video game deals
// New in video games
// Virtual Reality
// Shop all VR
// Meta VR
// VR Accessories
// VR Headsets
// Arcade & retro
// Shop all Arcade & retro
// Xbox


   