process.on('message', (msg) => {
    const Jasmine = require('jasmine');
    const reporter = {
        jasmineStarted: (data) => process.send({type: 'jasmineStarted', data: data}),
        suiteStarted: (data) => process.send({type: 'suiteStarted', data: data}),
        specStarted: (data) => process.send({type: 'specStarted', data: data}),
        jasmineDone: (data) => {
            process.send({type: 'jasmineDone', data: data});
        },
        specDone: (data) => process.send({type: 'specDone', data: data}),
        suiteDone: (data) => process.send({type: 'suiteDone', data: data}),
        isComplete: (data) => process.send({type: 'isComplete', data: data}),
        print: (data) => {}
    };
    const jasmine = new Jasmine();
    jasmine.exit = () => {
        setTimeout(() => {process.exit()},700);
    };
    jasmine.addReporter(reporter);
    jasmine.configureDefaultReporter(reporter);
    jasmine.execute([msg]);
});