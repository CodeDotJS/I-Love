import childProcess from 'child_process';
import test from 'ava';

test.cb(t => {
	childProcess.execFile('./cli.js', ['i-love -u unicorn -c rainbow'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.true(stdout.trim().length > 0);
		t.end();
	});
});
