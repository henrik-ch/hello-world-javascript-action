# limit-event-javascript-action

This action checks a price limit, current price and previous price, to determine if a limit event 
has occurred.

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

uses: henrik-ch/limit-event-javascript-action@v1.8
with:
  limit-price: ${{env.PRICE_LIMIT}}
  current-price: ${{env.CUR_PRICE}}
  previous-price: ${{env.PREV_PRICE}}
