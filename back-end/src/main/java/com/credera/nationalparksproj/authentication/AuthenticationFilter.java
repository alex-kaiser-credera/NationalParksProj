//package com.credera.nationalparksproj.authentication;
//
//import io.micrometer.core.instrument.util.StringUtils;
//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
//import org.springframework.security.web.util.matcher.RequestMatcher;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.Optional;
//
//import static com.google.common.net.HttpHeaders.AUTHORIZATION;

//public class AuthenticationFilter extends AbstractAuthenticationProcessingFilter {
//
//    AuthenticationFilter(final RequestMatcher requiresAuth) {
//        super(requiresAuth);
//    }

//    @Override
//    public org.springframework.security.core.Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {
//
//        Optional tokenParam = Optional.ofNullable(httpServletRequest.getHeader(AUTHORIZATION)); //Authorization: Bearer TOKEN
//        String token= httpServletRequest.getHeader(AUTHORIZATION);
//        token= StringUtils.removeStart(token, "Bearer").trim();
//        Authentication requestAuthentication = new UsernamePasswordAuthenticationToken(token, token);
//        return getAuthenticationManager().authenticate(requestAuthentication);
//
//    }
//
//    @Override
//    protected void successfulAuthentication(final HttpServletRequest request, final HttpServletResponse response, final FilterChain chain, final Authentication authResult) throws IOException, ServletException {
//        SecurityContextHolder.getContext().setAuthentication(authResult);
//        chain.doFilter(request, response);
//    }
//}
