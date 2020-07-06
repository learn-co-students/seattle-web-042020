# Time Conversion

- Given a string in the format "hh:mm:ssAM" or "hh:mm:ssPM", return the correct conversion to military time in format "00:00:00"

*Note, midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24 hour clock.*

## Examples

```javascript
    timeConverter("12:45:00PM")
        => "12:45:00"
    timeConverter("6:15:34PM")
        => "18:15:34"
    timeConverter("11:56:10PM")
        => "23:56:10"
```



### Source:
[HackerRank](https://www.hackerrank.com/challenges/time-conversion/problem)