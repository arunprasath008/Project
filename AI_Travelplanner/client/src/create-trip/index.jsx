// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input } from '@/components/ui/input';
// import { SelectBudgetOptions, SelectTravelsList } from '@/constants/options';
// import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
// import Headers from '../components/custom/Header'


// function CreateTrip() {
//     const [query, setQuery] = useState(''); // User input
//     const [suggestions, setSuggestions] = useState([]); // Autocomplete suggestions
//     const[days,setDays]=useState();
//     const[budget,setBudget]=useState();
//     const[people,setPeople]=useState();
//     // Fetch suggestions from GoMaps API
//     const fetchSuggestions = async (input) => {
//         if (!input) {
//             setSuggestions([]);
//             return;
//         }

//         try {
//             const response = await axios.get(
//                 `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json`,
//                 {
//                     params: {
//                         input,
//                         key: 'AlzaSyaOdDAgA6ELDAe3IPrmPTpnBI-6m-DMb3r', // Your API key
//                     },
//                 }
//             );

//             // Extract predictions from the API response
//             setSuggestions(response.data.predictions || []);
//         } catch (error) {
//             console.error('Error fetching autocomplete suggestions:', error);
//             setSuggestions([]); // Clear suggestions on error
//         }
//     };

//     // Handle input change and trigger fetch
//     const handleInputChange = (e) => {
//         const userInput = e.target.value;
//         setQuery(userInput);
//         fetchSuggestions(userInput); // Fetch suggestions based on input
//     };
//     const handleDaysChange = (e) => {
//         const value = Number(e.target.value);
//         if (value> 10) {
//             toast("Maximum days allowed is 10");
//         }
//         setDays(Math.min(Math.max(1, value), 10));
//     }

//     const budgetfunc=(title)=>{
//         setBudget(title);
//     }
//     const numofPeople=(title)=>{
//         setPeople(title);
//     }

//     const handlesubmit=()=>{
//         if(!query || !days || !budget || !people){
//             toast("Please enter all the details");
//             return;
//         }
//         console.log(query);
//         console.log(suggestions);
//         console.log(days);
//         console.log(budget);
//         console.log(people);
//         const response=axios.post("http://localhost:5000/gemini",{
//             query:query,
//             days:days,
//             budget:budget,
//             people:people
//         }).then((res)=>{
//             console.log("successfully passed datas from frontend to backend",res);
//         }).catch((e)=>{
//             console.log("error in sending",e);
//         })
//     }

//     return (
//     <>
//     <Headers/>
    
//         <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
//             <h2 className='font-bold text-3xl'>Tell us Your Travel Preferences 🏕️🌴</h2>
//             <p className='mt-3 text-gray-500 text-xl'>
//                 Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences.
//             </p>
//             <div className='mt-20 flex flex-col gap-10'>
//                 <div>
//                     <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={handleInputChange}
//                         className="border px-3 py-2 w-full"
//                         placeholder="Enter your destination"
//                     />
//                     {suggestions.length > 0 && (
//                         <ul className="border mt-2 bg-white rounded shadow-lg">
//                             {suggestions.map((suggestion, index) => (
//                                 <li
//                                     key={index}
//                                     className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                                     onClick={() => {
//                                         setQuery(suggestion.description);
//                                         console.log(suggestion.description); // Update input value
//                                         setSuggestions([]); // Clear suggestions
//                                     }}
//                                 >
//                                     {suggestion.description}
//                                 </li>
                                
//                             ))}
                            
//                         </ul>
//                     )}
                    
//                 </div>
            
//             <div>
//                 <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
//                 <Input placeholder={'Ex.3'} type='number' onChange={handleDaysChange}>
//                 </Input>
//             </div>
            
//             <div>
//             <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
            
//             <div className='grid grid-cols-3 gap-5 mt-5' > 
//                 {SelectBudgetOptions.map((item,index)=>{
//                     const isActive = budget === item.title;
//                     return (
//                     <div key={index}
//                     className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
//                         isActive ? 'bg-blue-100 border-blue-500' : 'bg-white'
//                     }`}
//                     onClick={() => budgetfunc(item.title)}>
//                         <h2 className='text-4xl'>{item.icon}</h2>
//                         <h2 className='font-bold text-lg'>{item.title}</h2>
//                         <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//                         </div>
//                     );
//                 })}
//             </div>
//             </div>

//             <div>
//             <h2 className='text-xl my-3 font-medium'>What do you plan on traveling with on your next adventure?</h2>
            
//             <div className='grid grid-cols-3 gap-5 mt-5' > 
//                 {SelectTravelsList.map((item,index)=>{
//                     const isActive = people === item.title;
//                     return (
//                     <div key={index} className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg  ${
//                         isActive ? 'bg-blue-100 border-blue-500' : 'bg-white'
//                     }`}onClick={() => numofPeople(item.title)}>
//                         <h2 className='text-4xl'>{item.icon}</h2>
//                         <h2 className='font-bold text-lg'>{item.title}</h2>
//                         <h2 className='text-sm text-gray-500'>{item.desc}</h2>
//                         </div>
//                     );
//                 })}
//             </div>
//             </div>
        
//             </div>
//             <div className='my-10 flex justify-end'>
//             <Button onClick={handlesubmit}>Generate Trip</Button>
//             </div>
//         </div>
//         </>
//     );
// }

// export default CreateTrip;







// import { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { MapPin, Calendar, Wallet, Users } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Slider } from '@/components/ui/slider';

// const formSteps = [
//   { id: 'destination', title: 'Destination', icon: MapPin },
//   { id: 'days', title: 'Duration', icon: Calendar },
//   { id: 'budget', title: 'Budget', icon: Wallet },
//   { id: 'travelerType', title: 'Travelers', icon: Users },
// ];

// export default function CreateTrip() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     destination: '',
//     days: 7,
//     budget: 'Moderate', // Default budget option
//     travelerType: 'solo',
//   });
//   const [query, setQuery] = useState(''); // User input for destination
//   const [suggestions, setSuggestions] = useState([]); // Store suggestions
//   const [travelPlan, setTravelPlan] = useState(null); // Store the generated travel plan
//   const [error, setError] = useState(''); // Store any error messages

//   // Fetch suggestions from GoMaps API
//   const fetchSuggestions = async (input) => {
//     if (!input) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json`,
//         {
//           params: {
//             input,
//             key: 'AlzaSyaOdDAgA6ELDAe3IPrmPTpnBI-6m-DMb3r', // Your API key
//           },
//         }
//       );
//       setSuggestions(response.data.predictions || []);
//     } catch (error) {
//       console.error('Error fetching autocomplete suggestions:', error);
//       setSuggestions([]);
//     }
//   };

//   // Handle the form's next button click
//   const handleNext = () => {
//     if (currentStep < formSteps.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   // Handle the form's back button click
//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   // Update form data
//   const updateFormData = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Prepare the request payload
//       const payload = {
//         query: formData.destination,
//         days: formData.days,
//         budget: formData.budget,
//         people: formData.travelerType,
//       };

//       // Make the API call to the backend
//       const response = await axios.post('http://localhost:5000/gemini', payload);

//       // Handle successful response
//       setTravelPlan(response.data); // Assuming you have a state for the travel plan
//       setError(''); // Clear any previous errors
//     } catch (error) {
//       // Handle error
//       console.error('Error generating travel plan:', error);
//       setError('Failed to generate travel plan. Please try again.');
//     }
//   };

//   // Handle user input change for destination
//   const handleInputChange = (e) => {
//     const userInput = e.target.value;
//     setQuery(userInput);
//     fetchSuggestions(userInput); // Fetch suggestions based on input
//   };

//   // Handle suggestion selection
//   const handleSuggestionSelect = (suggestion) => {
//     setQuery(suggestion.description);
//     setSuggestions([]); // Clear suggestions after selection
//     updateFormData('destination', suggestion.description); // Update form data with selected suggestion
//   };

//   // Render the current step of the form
//   const renderStep = () => {
//     switch (formSteps[currentStep].id) {
//       case 'destination':
//         return (
//           <div className="space-y-4">
//             <Label htmlFor="destination" className="text-2xl font-semibold flex items-center text-primary">
//               <MapPin className="h-8 w-8 mr-2 text-primary" />
//               Where's your dream destination?
//             </Label>
//             <Input
//               id="destination"
//               placeholder="e.g., Paris, Tokyo, New York"
//               value={query}
//               onChange={handleInputChange}
//               className="text-lg p-6 rounded-xl border-2 border-primary/20 focus:border-primary transition-all duration-300"
//               required
//             />
//             {suggestions.length > 0 && (
//               <ul className="border mt-2 bg-white rounded shadow-lg">
//                 {suggestions.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => handleSuggestionSelect(suggestion)}
//                   >
//                     {suggestion.description}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//       case 'days':
//         return (
//           <div className="space-y-6">
//             <Label htmlFor="days" className="text-2xl font-semibold flex items-center text-primary">
//               <Calendar className="h-8 w-8 mr-2 text-primary" />
//               How long is your adventure?
//             </Label>
//             <div className="flex items-center space-x-4">
//               <Slider
//                 id="days"
//                 min={1}
//                 max={10} // Set the range from 1 to 10
//                 step={1} // Increment by 1
//                 value={[formData.days]}
//                 onValueChange={(value) => updateFormData('days', value[0])}
//                 className="flex-grow"
//               />
//               <span className="text-4xl font-bold w-20 text-center text-primary">
//                 {formData.days}
//               </span>
//             </div>
//             <p className="text-lg text-muted-foreground text-center">
//               {formData.days === 1 ? 'day' : 'days'}
//             </p>
//           </div>
//         );
//       case 'budget':
//         return (
//           <div className="space-y-6">
//             <Label htmlFor="budget" className="text-2xl font-semibold flex items-center text-primary">
//               <Wallet className="h-8 w-8 mr-2 text-primary" />
//               What's your budget for this trip?
//             </Label>
//             <RadioGroup
//               value={formData.budget}
//               onValueChange={(value) => updateFormData('budget', value)}
//               className="grid grid-cols-3 gap-4"
//             >
//               {['Cheap', 'Moderate', 'Luxury'].map((budgetOption) => (
//                 <div key={budgetOption} className="relative">
//                   <RadioGroupItem value={budgetOption} id={budgetOption} className="peer sr-only" />
//                   <Label
//                     htmlFor={budgetOption}
//                     className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
//                   >
//                     <span className="capitalize text-xl">{budgetOption}</span>
//                   </Label>
//                 </div>
//               ))}
//             </RadioGroup>
//           </div>
//         );
//       case 'travelerType':
//         return (
//           <div className="space-y-6">
//             <Label className="text-2xl font-semibold flex items-center text-primary">
//               <Users className="h-8 w-8 mr-2 text-primary" />
//               Who's joining your journey?
//             </Label>
//             <RadioGroup
//               value={formData.travelerType}
//               onValueChange={(value) => updateFormData('travelerType', value)}
//               className="grid grid-cols-2 gap-4"
//             >
//               {['solo', 'couple', 'family', 'friends'].map((type) => (
//                 <div key={type} className="relative">
//                   <RadioGroupItem value={type} id={type} className="peer sr-only" />
//                   <Label
//                     htmlFor={type}
//                     className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
//                   >
//                     <span className="capitalize text-xl">{type}</span>
//                   </Label>
//                 </div>
//               ))}
//             </RadioGroup>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-xl space-y-6"
//       >
//         <h1 className="text-3xl font-bold text-center text-primary">Create Your Dream Trip</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-6">{renderStep()}</div>
//           <div className="flex justify-between mt-8">
//             {currentStep > 0 && (
//               <Button variant="outline" onClick={handleBack}>Back</Button>
//             )}
//             <div className="flex items-center">
//               {currentStep < formSteps.length - 1 ? (
//                 <Button onClick={handleNext}>Next</Button>
//               ) : (
//                 <Button type="submit">Generate Plan</Button>
//               )}
//             </div>
//           </div>
//         </form>
       
//         {error && <p className="text-red-600 text-sm">{error}</p>}
//       </motion.div>
//     </div>
//   );
// }



import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Wallet, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from '@/components/ui/slider';

const formSteps = [
  { id: 'destination', title: 'Destination', icon: MapPin },
  { id: 'days', title: 'Duration', icon: Calendar },
  { id: 'budget', title: 'Budget', icon: Wallet },
  { id: 'travelerType', title: 'Travelers', icon: Users },
];

export default function CreateTrip() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    destination: '',
    days: undefined, // Removed default value
    budget: '', // Removed default value
    travelerType: '', // Removed default value
  });
  const [query, setQuery] = useState(''); // User input for destination
  const [suggestions, setSuggestions] = useState([]); // Store suggestions
  const [travelPlan, setTravelPlan] = useState(null); // Store the generated travel plan
  const [error, setError] = useState(''); // Store any error messages

  // Fetch suggestions from GoMaps API
  const fetchSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json`,
        {
          params: {
            input,
            key: 'AlzaSyaOdDAgA6ELDAe3IPrmPTpnBI-6m-DMb3r', // Your API key
          },
        }
      );
      setSuggestions(response.data.predictions || []);
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
      setSuggestions([]);
    }
  };

  // Handle the form's next button click
  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Handle the form's back button click
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Update form data
  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the request payload
      const payload = {
        query: formData.destination,
        days: formData.days,
        budget: formData.budget,
        people: formData.travelerType,
      };

      // Make the API call to the backend
      const response = await axios.post('http://localhost:5000/gemini', payload);

      // Handle successful response
      setTravelPlan(response.data);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error generating travel plan:', error);
      setError('Failed to generate travel plan. Please try again.');
    }
  };

  // Handle user input change for destination
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
    fetchSuggestions(userInput); // Fetch suggestions based on input
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    setQuery(suggestion.description);
    setSuggestions([]); // Clear suggestions after selection
    updateFormData('destination', suggestion.description); // Update form data with selected suggestion
  };

  // Render the current step of the form
  const renderStep = () => {
    switch (formSteps[currentStep].id) {
      case 'destination':
        return (
          <div className="space-y-4">
            <Label htmlFor="destination" className="text-2xl font-semibold flex items-center text-primary">
              <MapPin className="h-8 w-8 mr-2 text-primary" />
              Where's your dream destination?
            </Label>
            <Input
              id="destination"
              placeholder="e.g., Paris, Tokyo, New York"
              value={query}
              onChange={handleInputChange}
              className="text-lg p-6 rounded-xl border-2 border-primary/20 focus:border-primary transition-all duration-300"
              required
            />
            {suggestions.length > 0 && (
              <ul className="border mt-2 bg-white rounded shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      case 'days':
        return (
          <div className="space-y-6">
            <Label htmlFor="days" className="text-2xl font-semibold flex items-center text-primary">
              <Calendar className="h-8 w-8 mr-2 text-primary" />
              How long is your adventure?
            </Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="days"
                min={1}
                max={10} // Set the range from 1 to 10
                step={1} // Increment by 1
                value={[formData.days || 1]}
                onValueChange={(value) => updateFormData('days', value[0])}
                className="flex-grow"
              />
              <span className="text-4xl font-bold w-20 text-center text-primary">
                {formData.days || 1}
              </span>
            </div>
            <p className="text-lg text-muted-foreground text-center">
              {formData.days === 1 ? 'day' : 'days'}
            </p>
          </div>
        );
      case 'budget':
        return (
          <div className="space-y-6">
            <Label htmlFor="budget" className="text-2xl font-semibold flex items-center text-primary">
              <Wallet className="h-8 w-8 mr-2 text-primary" />
              What's your budget for this trip?
            </Label>
            <RadioGroup
              value={formData.budget}
              onValueChange={(value) => updateFormData('budget', value)}
              className="grid grid-cols-3 gap-4"
            >
              {['Cheap', 'Moderate', 'Luxury'].map((budgetOption) => (
                <div key={budgetOption} className="relative">
                  <RadioGroupItem value={budgetOption} id={budgetOption} className="peer sr-only" />
                  <Label
                    htmlFor={budgetOption}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                  >
                    <span className="capitalize text-xl">{budgetOption}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      case 'travelerType':
        return (
          <div className="space-y-6">
            <Label className="text-2xl font-semibold flex items-center text-primary">
              <Users className="h-8 w-8 mr-2 text-primary" />
              Who's joining your journey?
            </Label>
            <RadioGroup
              value={formData.travelerType}
              onValueChange={(value) => updateFormData('travelerType', value)}
              className="grid grid-cols-2 gap-4"
            >
              {['solo', 'couple', 'family', 'friends'].map((type) => (
                <div key={type} className="relative">
                  <RadioGroupItem value={type} id={type} className="peer sr-only" />
                  <Label
                    htmlFor={type}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                  >
                    <span className="capitalize text-xl">{type}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-xl space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{formSteps[currentStep].title}</h2>
          <p className="text-gray-500">{currentStep + 1}/{formSteps.length}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              disabled={currentStep === 0}
              onClick={handleBack}
              variant="secondary"
             
            >
              Back
            </Button>
            {currentStep < formSteps.length - 1 ? (
              <Button
                type="button"
                onClick={handleNext}
               
              >
                Next
              </Button>
            ) : (
              <Button type="submit ">
                Submit
              </Button>
            )}
          </div>
        </form>
        {error && <p className="text-red-500">{error}</p>}
       
      
      </motion.div>
    </div>
  );
}









