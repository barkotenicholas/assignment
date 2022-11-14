3.  Use Memo - is a higher-order component used to wrap a purely functional component to prevent re-rendering if the props received in that component never re-renders
Use state. Keeping component state local- using the use state hook to keep components local.
***
4. - The Context API is great if you only have to interact with a single model, but if you have multiple data structures that you need to maintain in your application’s state, Redux is better.
With Redux, you can have a single provider that merges together multiple separate sub-states, but with the Context API, you’d need separate providers for “user”, “cart”, “products”, etc. Nesting them all isn’t the end of the world, but Redux is definitely a lot simpler.
***
5. Configuring a redux is too complicated, Redux requires too much boiler plate
***
7. Creating a new object with the same internals as another object will not magically cause that object to point to one that already exists. The objects may look the same, but they do not point to the same instance.

***
9. First is to design a form to take users input , in the form i would do email validation and password validation . after validation i would send the data to the backend service where i would check if email exist  if it exist its ok else is it doesnot exist i will send data to browser to inform that the email does not exist. If the email exist i will fetch password from database decryt it and compare to the users password if the password does not match i Will send Data back informing that the password is incorrect . If the password matches i will generate a token with an expiry date of an hour and send it back to the client 