const NB_SYSCALLS = 100;

const SYSCALLS =
    {
        SYS_rewinddir: NOT_DEFINED,
        SYS_sbrk: 45, //	(count)
        SYS_fork: 2,
        SYS_write: 4,   //	(fd,buffer,count)
        SYS_read: 3,    //	(fd,buffer,count)
        SYS_open: 5,    //	(filename,flag)
        SYS_close: 6,   //	(fd)
        SYS_execve: 11, //	(filename,argv,envp )
        SYS_dup: NOT_DEFINED,
        SYS_dup2: 38,
        SYS_pwrite: NOT_DEFINED,
        SYS_pread: NOT_DEFINED,
        SYS_exit: 1, //	(status)
        SYS_halt: 0,
        SYS_getdents: 89,
        SYS_fchdir: NOT_DEFINED,
        SYS_isatty: NOT_DEFINED,
        SYS_lseek: 19,
        SYS_unlink: 17,
        SYS_link: 18,
        SYS_readlink: 19,
        SYS_sleep_thread: NOT_DEFINED,
        SYS_access: NOT_DEFINED,
        SYS_chdir: 12,
        SYS_getpid: 20,
        SYS_getuid: 70,
        SYS_gettid: NOT_DEFINED,
        SYS_rmdir: NOT_DEFINED,
        SYS_symlink: 9, //	(oldname,newname)
        SYS_fcntl: NOT_DEFINED,
        SYS_get_system_time: NOT_DEFINED,
        SYS_stat: 106,
        SYS_fstat: NOT_DEFINED,
        SYS_stime: NOT_DEFINED,
        SYS_mkdir: 15,
        SYS_ioctl: 54, //	(fd,adress,buffer)
        SYS_select: NOT_DEFINED,
        SYS_mount: 13,
        SYS_unmount: 14,
        SYS_lstat: NOT_DEFINED,
        SYS_utime: NOT_DEFINED,
        SYS_wait4: 7,
        SYS_socket: NOT_DEFINED,
        SYS_connect: NOT_DEFINED,
        SYS_sigaction: 67,
        SYS_kill: 37,
        SYS_sigprocmask: NOT_DEFINED,
        SYS_dbprintf: NOT_DEFINED,
        SYS_create_semaphore: NOT_DEFINED,
        SYS_delete_semaphore: NOT_DEFINED,
        SYS_lock_semaphore: NOT_DEFINED,
        SYS_unlock_semaphore: NOT_DEFINED,
        SYS_create_thread: 101,
        SYS_wake_up_thread: NOT_DEFINED,
        SYS_kill_thread: NOT_DEFINED,
        SYS_mmap: 55,
        SYS_loadmod: 71,
        SYS_login: 72,
        SYS_newuser: 73
    };

Object.freeze(SYSCALLS);

let calls = [];

function add(num, syscall_handler) {
    calls[num] = h;
}

function call(num) {
    if (num < NB_SYSCALLS && calls[num] !== null)
        calls[num]();
}

function sys_init() {
    var i;
    for (i = 0; i < NB_SYSCALLS; i++)
        calls[i] = null;

    add(SYSCALLS.SYS_open, call_open);
    add(SYSCALLS.SYS_close, call_close);
    add(SYSCALLS.SYS_read, call_read);
    add(SYSCALLS.SYS_write, call_write);
    add(SYSCALLS.SYS_sbrk, call_sbrk);
    add(SYSCALLS.SYS_ioctl, call_ioctl);
    add(SYSCALLS.SYS_exit, call_exit);
    add(SYSCALLS.SYS_execve, call_execv);
    add(SYSCALLS.SYS_symlink, call_symlink);
    add(SYSCALLS.SYS_getdents, call_getdents);
    add(SYSCALLS.SYS_wait4, call_wait);
    add(SYSCALLS.SYS_dup2, call_dup2);
    add(SYSCALLS.SYS_fork, call_fork);
    add(SYSCALLS.SYS_chdir, call_chdir);
    add(SYSCALLS.SYS_mmap, call_mmap);
    console.log("System calls initialized!");
}
