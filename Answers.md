1. What problem does the context API help solve?
    'prop drilling' - passing down data through components that
    does not find relevance for the sake of having it available to its child
    components. 
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions: are different ways in which a user can manipulate state through the UI
    reducer: the logic that enables the technicalities behind state manipulation
    store:  holds the reducer therefore the initial state as well, which is left untouched. and made available through the Provider.
    The store is known as the single source of truth because everything in terms of state changes in the app is being done in the store. It holds the initial state and also the pure function that is responsible for copying state and outputting a brand-new state. Almost everything else in the app is either tied to this or hard-copied. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is beneficial for when that state matters to the entire application (i.e an API request). Component state is when the state only matters to that component itself (i.e a form input hook that handles input changes. The entire component might be interested in the submitted values of the form, but not the handling of it.).

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk has the ability to make a synchronous application asynchronous. This is helpful for when you have an action that handles an API request and needs to perform promises therefore needs a delay to make the request.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I think that context API was the most simplest however I have to say that I feel more comfortable with Redux just because I've spent more time on it.
    I enjoyed learning about reducers. I think that it is a great way to hold the entire state, and have clear state management done in one file. I didn't like that I have to create a whole file for actions; it made it a little harder to trace everything back to its sources. 
