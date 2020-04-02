//实现一个 requests 函数，要求可以对多个 url 进行请求，可以指定最大并发数，以及指定自定义头部
//，请从函数签名开始设计

const requests = (urls, max) => {
    const multiRequests = [];

    let index = 0;
    while (index < Math.ceil(urls/max)) {
        let splits = urls.splice(index * max, max);

        const subRequest = Promise.all(splits.map(url => fetch(url)));
        multiRequests.push(subRequest);

        index++;
    }

    return Promise.all(multiRequests);
}

