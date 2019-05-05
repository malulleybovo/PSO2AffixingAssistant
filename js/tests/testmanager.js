/**
 * Test Manager
 * 
 * @version 0.8.0
 * @author malulleybovo (2019)
 */

class TestManager {

    /**
     * Reference to the Test Suites
     */
    static get TestSuites() {
        return [
            AssistantTestSuite
        ];
    }

    static get forceStop() {
        return this._hasStopped;
    }

    static set forceStop(val) {
        this._hasStopped = val == true;
    }

    /**
     * Executes all listed Test Suites
     */
    static execute(condition = (test) => !test.startsWith('exhaust')) {
        TestManager.forceStop = false;
        console.log(
              '+======================================+\n'
            + '| Starting the Test Manager            |\n'
            + '+======================================+');
        TestManager.TestSuites.forEach(suite => {
            let numFail = 0;
            let numPass = 0;
            console.log(
                  '+--------------------------------------+\n'
                + '| Executing ' + suite.name
                + ' '.repeat(26 - suite.name.length) + ' |\n');
            Object.getOwnPropertyNames(suite).forEach(test => {
                if (condition(test) && typeof suite[test] == 'function') {
                    let pass = suite[test]();
                    if (pass) {
                        numPass++;
                        console.log('| > %c' + test + ' %cPassed'
                            + ' '.repeat(28 - test.length) + '%c|',
                            'color:#AAAAAA', 'color:#ADFF2F',
                            'color:unset');
                    }
                    else {
                        numFail++;
                        console.log('| > %c' + test + ' %cFailed'
                            + ' '.repeat(28 - test.length) + '%c|',
                            'color:#AAAAAA', 'color:#FF6347',
                            'color:unset');
                    }
                }
            });
            console.log(
                  '| ' + suite.name + ' %c' + (numFail == 0 ? 
                    'Passed' : 'Failed')
                + ' '.repeat(29 - suite.name.length) + '%c |\n'
                + '+--------------------------------------+',
                  'color:' + (numFail == 0 ? '#ADFF2F' : '#FF6347') + ';',
                'color:unset;');
        });
        console.log(
              '+======================================+\n'
            + '| End of Execution                     |\n'
            + '+======================================+');
    }

    static exhaust() {
        TestManager.execute((test) => test.startsWith('exhaust'));
    }

}
