# 3-JavaScript的保留字

ECMA-262 描述了一组具有特定用途的关键字。这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字也是语言保留的，不能用作标识符。以下就是ECMAScript的全部关键字（带*号上标的是第5 版新增的关键字）：
``` js
break       do        instanceof        typeof
case        else        new        var
catch        finally        return        void
continue        for        switch        while
debugger*        function        this        with
default        if        throw        delete
in        try
```

ECMA-262 还描述了另外一组不能用作标识符的保留字。尽管保留字在这门语言中还没有任何特定的用途。但它们有可能在将来被用作关键字。以下是ECMA-262 第3 版定义的全部保留字：
``` js
abstract        enum        int        short
boolean        export        interface        static
byte        extends        long        super
char        final        native        synchronized
class        float        package        throws
const        goto        private        transient
debugger        implements        protected        volatile
double        import        public
```

第5 版把在非严格模式下运行时的保留字缩减为下列这些：
``` js
class        enum        extends        super
const        export        import
```

在严格模式下，第5 版还对以下保留字施加了限制：
``` js
implements        package        public        interface
private        static        let        protected
yield
```

总之，这些词都不要使用做自己的变量名字就好，否则会跟系统预定义的功能起冲突。
