# Scena - A platform independent way of invoking main-like functions.

Scena is short for scenario - it wraps up the context of an invocation
of a main function in Typescript into a kind of single parameter scenario.

Scena formalizes the way that [wats](https://github.com/planloft/wats)
likes to invoke functions that are similar to main in C, Java and
other programming languages.

There's no need to actually refer to Scena in a `wats` module or
testing package, but if you like type safety, it can be convenient to.

Scena has two interfaces, the eponymous Scena, which provides the
arguments and other context parameters, and Main which defines what
a main function should look like and how it should behave.

It also has a special kind of Error subclass called Failure, that
provides an associated exit code (per BSD sysexits) to provide
some limited differentiation of failure modes back to the invoker.

## Releases

### 2021-10-24 v0.1.2

Still a wholly experimental release.

Add types field to package.json.

### 2021-10-24 v0.1.1

Still a wholly experimental release.

Used wats to fill out the runtime and declare directories. 

### 2021-10-24 v0.1.0

This is really rough - it has a couple of fields defined, but these
are not all the ones we want to support, or necessarily fully explained.

A wholly experimental release.
