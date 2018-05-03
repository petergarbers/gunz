
### Development mode

To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `public/index.html` page in the browser.


### Building for production

```
lein clean
lein package
```


### Goals

#### Phase 1

Basic working version

 - Can Connect to gundb database
 - Can connect gundb atom to database
 - Ratom can read from gundb database
 - Ratom can write to gundb database
 
#### Phase 2

 - Incorportate paths
 - ... 
 - Profit



```

(def dd (connect "meow"))

(reset! dd #{:name "peter"})


```
