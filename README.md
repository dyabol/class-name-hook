# useClassName 

React hook for className

```js
const Component: React.FC = ({show, className}) => {
    const classes = useClassName([className, 'foo']);
    classes.add('bar');
    classes.add('baz', !show);
    return <div className={classes.print()} />;
}
```
