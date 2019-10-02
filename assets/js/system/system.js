import 'cmds';

const NB_SYSCALLS = 100;

const SYSCALLS =
    {
        LS: 0,
        CAT: 1,
        WHOAMI: 2,
        DATE: 3,
        HELP: 4,
        CLEAR: 5,
        REBOOT: 6,
        CD: 7,
        MV: 8,
        RM: 9,
        RMDIR: 10,
        TOUCH: 11,
        SUDO: 12
    };

Object.freeze(SYSCALLS);

let calls = [];
calls.length = NB_SYSCALLS;

function add(num, syscall_handler) {
    calls[num] = syscall_handler;
    console.log("Adding handler for " + num);
}

function call(num) {
    console.log("Calling " + num);
    if (num < NB_SYSCALLS && calls[num] !== null)
        calls[num]();
}

function sys_init() {
    for (let i = 0; i < NB_SYSCALLS; i++)
        calls[i] = null;

    add(SYSCALLS.LS, ls);
    add(SYSCALLS.CAT, cat);
    add(SYSCALLS.CD, cd);
    add(SYSCALLS.CLEAR, clear);
    add(SYSCALLS.DATE, date);
    add(SYSCALLS.HELP, help);
    add(SYSCALLS.MV, mv);
    add(SYSCALLS.REBOOT, reboot);
    add(SYSCALLS.RM, rm);
    add(SYSCALLS.RMDIR, rmdir);
    add(SYSCALLS.SUDO, sudo);
    add(SYSCALLS.TOUCH, touch);
    add(SYSCALLS.WHOAMI, whoami);

    console.log("System calls initialized!");
}
