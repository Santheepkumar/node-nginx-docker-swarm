## Docker swarm commands

- This will initialise docker swarm with manager node
```shell
docker swarm init
```
- To add workers
```shell
docker swarm join --token <token> <manager-ip>:2377
```

- To Deploy
```shell
docker stack deploy -c docker-compose.yml my_stack

```
- Verify the Deployment
```shell
docker stack services my_stack
# or
docker stack ps my_stack
```

- To scale
```shell
docker service scale my_stack_app=5
```