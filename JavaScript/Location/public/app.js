var theDomain = window.location.hostname;
console.log(theDomain)


var theDomainHref = window.location.href;
console.log(theDomainHref)

setTimeout(() => {
    console.log(1);
    // window.location.href = theDomainHref + '/about.html#bottom';
    window.location.assign(theDomainHref + '/about.html#bottom');
    window.location.replace(theDomainHref + '/about.html#bottom');

    // window.location.pathname = '/about.html#bottom'

}, 5000)