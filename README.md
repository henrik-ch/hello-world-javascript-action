# hello-world-javascript-action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `limit-price`

**Required** The limit price to check against. Default `"10"`.

## `current-price`

**Required** The current price to check against. Default `"12"`.

## `previous-price`

**Required** The previous price to check against. Default `"8"`.


## Outputs

## `time`

The time we checked the limit.

## `limit-event`

Did a limit event occur or not.

## Example usage

uses: actions/limit-event-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
