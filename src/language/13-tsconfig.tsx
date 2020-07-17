/*

tsconfig.json 

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

Using tsconfig.json #
1 By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
2 By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

When input files are specified on the command line, tsconfig.json files are ignored.


# Run a compile based on a backwards look through the fs for a tsconfig.json
tsc 

# Transpile just the index.ts with the compiler defaults
tsc index.ts

# Transpile any .ts files in the folder src, with the default settings
tsc src/*.ts

# Transpile any .ts files in the folder src, with the compiler settings from tsconfig.json
tsc --project tsconfig.json src/*.ts


*/
