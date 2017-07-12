'use strict';
module.exports = class JasmineResults {

    constructor(test,criteria,exercise){
        this.suites = {};
        this.currentSuite = null;
        this.test = test;
        this.criteria = criteria;
        this.exercise = exercise;
    }

    registerSuite(suite){
        this.suites[suite.fullName] = {
            data: suite,
            specs: {},
            specsList: [],
            specNames: []
        };
        this.currentSuite = this.suites[suite.fullName];
    }

    registerSpec(spec){
        this.currentSuite.specNames.push(spec.fullName);
        this.currentSuite.specsList.push(spec);
    }

    resolveSpec(spec){
        for(let fullName in this.suites){
            if(this.suites.hasOwnProperty(fullName) && this.suites[fullName].specNames.includes(spec.fullName)){
                for(let i = 0; i < this.suites[fullName].specsList.length; i++){
                    if(this.suites[fullName].specsList[i].fullName === spec.fullName){
                        this.suites[fullName].specsList[i] = spec;
                        break;
                    }
                }
                break;
            }
        }
    }

    resolveSuite(suite){
        for(let fullName in this.suites){
            if(this.suites.hasOwnProperty(fullName) && this.suites[fullName].data.fullName === suite.fullName){
                this.suites[fullName].data = suite.fullName;
                break;
            }
        }
    }

    getResults(){
        for(let fullName in this.suites){
            for(let i = 0; i < this.suites[fullName].specsList.length; i++){
                this.suites[fullName].specs[this.suites[fullName].specsList[i].fullName] = this.suites[fullName].specsList[i];
            }
            delete this.suites[fullName].specsList;
            delete this.suites[fullName].specNames;
        }
        if(this.test.type.overall){
            let passAll = true;
            let failedSpec = null;
            for(let suiteId in this.suites){
                for(let specId in this.suites[suiteId].specs){
                    if(!!this.suites[suiteId].specs[specId].failedExpectations.length){
                        passAll = false;
                        failedSpec = this.suites[suiteId].specs[specId];
                    }
                }
            }
            return {
                test: this.test,
                input: this.test.input,
                result: passAll,
                expected: this.test.expected,
                type: 'jasmine',
                pass: passAll === this.test.expected,
                failedSpec: passAll !== this.test.expected ? failedSpec : null
            };
        }
        else if(!this.test.type.hasOwnProperty('suite') || ! this.test.type.hasOwnProperty('spec')){
            throw new Exception('"suite" and "spec" properties required on "jasmine" tests when "overall" isn\'t set to true');
        }
        else if(!this.suites.hasOwnProperty(this.test.type.suite)){
            return {
                test: this.test,
                input: this.test.input,
                result: `MISSING REQUIRED TEST SUITE: ${this.test.type.suite}`,
                expected: this.test.expected,
                type: 'jasmine',
                pass: false,
                missing: true
            };
        }
        else if(!this.suites[this.test.type.suite].specs.hasOwnProperty(`${this.test.type.suite} ${this.test.type.spec}`)){
            return {
                test: this.test,
                input: this.test.input,
                result: `MISSING REQUIRED TEST SPEC INSIDE TEST SUITE ("${this.test.type.suite}"): "${this.test.type.spec}"`,
                expected: this.test.expected,
                type: 'jasmine',
                pass: false,
                missing: true
            };
        }
        const specResults = this.suites[this.test.type.suite].specs[`${this.test.type.suite} ${this.test.type.spec}`];
        return {
            test: this.test,
            input: this.test.input,
            result: specResults,
            expected: this.test.expected,
            type: 'jasmine',
            pass: !specResults.failedExpectations.length === this.test.expected
        };
    }
}