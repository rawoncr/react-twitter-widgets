# react-twitter-widgets

Alleviates the need for Twitter's default 2008-style widget snippets.

Available widgets: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

All widgets take an optional options object prop. To learn more about the available options (height, width, align, count, etc), see [this link](https://dev.twitter.com/web/javascript/creating-widgets).

`Timeline` requires the widget id supplied by Twitter as `widgetId` (ex. `'123456'`). Also, note that you can override your configured screen name with a custom screenName in the options object.

`Share` requires a `url` prop.

`Follow` and `Mention` require a `screenName` prop.

`Hashtag` requires a `tag` prop.

`Tweet` requires a `tweetId` prop. Ex. `'511181794914627584'`

## Installation

```
npm install --save react-twitter-widgets
```

## Usage

```
import { Timeline } from 'react-twitter-widgets'

ReactDOM.render((
  <Timeline
    widgetId={'29838471883830183'}
    options={{
      screenName: 'TwitterDev',
      height: '400'
    }}
  />
), document.getElementById('root'))
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Andrew Suzuki - @andrewsuzuki - [andrewsuzuki.com](http://andrewsuzuki.com)

## License

MIT